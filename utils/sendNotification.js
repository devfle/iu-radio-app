import { send, EmailJSResponseStatus } from '@emailjs/react-native';

const sendNotification = async (message) => {
  try {
    await send(
      'SERVICE_ID',
      'TEMPLATE_ID',
      {
        name: 'IU Radio App',
        email: 'feedback@fantasy-fm-iu.com',
        message: message,
      },
      {
        publicKey: 'PUBLIC_KEY',
      }
    );

    console.log('SUCCESS!');
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.log('EmailJS Request Failed...', err);
    }

    console.log('ERROR', err);
  }
};

export { sendNotification };
