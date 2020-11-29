import { Logger } from '@overnightjs/logger';
import {SetupServer} from './server';

enum ExitStatus {
  Failure = 1,
  Success = 0,
}

async function bootstrap() {
  try {
    const appServer = new SetupServer();
    appServer.start(process.env.POST || "3001");
  
    // Signal
    const exitSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
    exitSignals.map((signal) => {
      process.on(signal, async () => {
        try {
          await appServer.close();
          Logger.Info('App exited with success');
          process.exit(ExitStatus.Success)
        } catch (error) {
          Logger.Err('App exited with error' + error);
          process.exit(ExitStatus.Failure)
        }
      })
    })
  } catch (error) {
    Logger.Err('App exited with error' + error);  
    process.exit(ExitStatus.Failure);
  }
 
}

bootstrap();