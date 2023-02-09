import { env } from '@/env/server.mjs';
import twilio from 'twilio';

const accountSid = env.TWILIO_ACCOUNT_SID;
const authToken = env.TWILIO_AUTH_TOKEN;
const verifySid = env.TWILIO_VERIFY_SID;

const twilioClient = twilio(accountSid, authToken);

export const sendPhoneVerCode = async (to: string) => {
  return await twilioClient.verify.v2
    .services(verifySid)
    .verifications.create({ to, channel: 'sms' });
};

export const checkPhoneVerCode = async (to: string, code: string) => {
  return await twilioClient.verify.v2
    .services(verifySid)
    .verificationChecks.create({ to, code });
};
