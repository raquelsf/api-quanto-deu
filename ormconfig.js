module.exports = {
    "type": "mysql",
    "host": process.env.MYSQL_HOST,
    "port": parseInt(process.env.MYSQL_PORT, 10) || 3306,
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_USER_PASS,
    "database": process.env.MYSQL_DB_NAME,
    "migrations": ["database/migrations/*{.ts,.js}"],
    "synchronize": false,
    "migrationsTableName": "migrations_typeorm",
    "migrationsRun": false,
    "logging": false,
    "logger": "file"
}