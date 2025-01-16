import PostgreSQL from 'pg'

const conexion = new PostgreSQL.Pool({
    host: '',
    user: '',
    password: '',
    port: '',
    database: ''
})

export default conexion