import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifygen2Test',
  access: (allow) => ({
    'public/*': [
      allow.authenticated.to(['read','write']),
    ],
  })
});