import {SetupServer} from './server';

function bootstrap() {
  const appServer = new SetupServer();
  appServer.start(3000);
}

bootstrap();