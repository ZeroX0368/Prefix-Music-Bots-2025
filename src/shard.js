import { execSync } from 'child_process';

// Run npm install before any other imports
try {
    console.log('[Shard] Running npm install...');
    execSync('npm install', { stdio: 'inherit', cwd: process.cwd() });
    console.log('[Shard] npm install completed.');
} catch (err) {
    console.error('[Shard] npm install failed:', err);
    process.exit(1);
}

import { ClusterManager, HeartbeatManager } from 'discord-hybrid-sharding';
import { config } from './config/config.js';

const manager = new ClusterManager('./src/index.js', {
    totalShards: 3,                  // Let Discord decide based on guild count
    shardsPerClusters: 10,           // You can tweak this to 3–6 for 3k–4k servers
    mode: 'process',                 // 'process' is safer for production
    token: config.token,             // Required for /gateway/bot shard count
    respawn: true,                   // Auto-respawn on crash
    restartMode: 'gracefulSwitch',   // Clean restarts without downtime
});

manager.extend(
    new HeartbeatManager({
        interval: 2000,              // 2s interval
        maxMissedHeartbeats: 5,      // Restart cluster if no heartbeat in 10s
    })
);

// Optional: cluster lifecycle logs
manager.on('clusterCreate', cluster => {
    console.log(`[Cluster] Launched Cluster ${cluster.id}`);
});
manager.on('debug', msg => {
    if (!msg.includes('Heartbeats')) console.log(`[Debug] ${msg}`);
});

manager.spawn({ timeout: -1 });      // Spawn with no timeout limit