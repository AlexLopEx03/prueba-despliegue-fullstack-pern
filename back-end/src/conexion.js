import pkg from 'pg'
const { Pool } = pkg
const conexion = new Pool({
    host: 'aws-0-eu-central-1.pooler.supabase.com',
    port: 6543,
    database: 'postgres',
    user: 'postgres.kfrqojnqvjlxdiiffugk',
    password: 'uTn3DCGjOuTO3uDh',
})
export default conexion