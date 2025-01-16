import {Pool} from 'pg'

const conexion = new Pool({
    host: 'db.prueba-despliegue-fullstack-pern.supabase.co',
    user: 'postgres',
    password: 'uTn3DCGjOuTO3uDh',
    port: 5432,
    database: 'prueba-despliegue-fullstack-pern',
    ssl: {
        rejectUnauthorized: false
    }
})

export default conexion