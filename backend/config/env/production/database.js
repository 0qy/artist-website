const parse = require('pg-connection-string').parse;
const config = parse(process.env.'postgres://paxyxfqiajrjbz:88dfdd5113b026dc663d153e5dda80b6093b5aad84b359df1b41096b8ba80799@ec2-34-252-251-16.eu-west-1.compute.amazonaws.com:5432/d22k89v4ebavmi');

module.exports = ({ env }) => ({
    defaultConnections: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: config.host,
                port: config.port,
                database: config.database,
                username: config.user,
                password: config.password,
                ssl: {
                    rejectUnauthorised: false,
                },
            },
            options: {
                ssl: true,
            },
        },
    },
});