import { Comment } from 'src/entities/comment.entity';
import { Topic } from 'src/entities/topic.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  port: 5432, // post is samw docker port
  username: 'postgres',
  password: 'postgres',
  entities: [User, Topic, Comment],
  synchronize: true, // in production, set to false
};

export default config;