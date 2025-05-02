export interface Environment {
    production: boolean;
    newsProviderApiBaseUrl: string;
    newsProviderNewsEndpointPath: string;
    newsProviderSourcesEndpointPath: string;
    newsProviderApiKey: string;
    logoProviderApiBaseUrl: string;
    ipstackApiKey: string;
}

export const environment: Environment= {
    production: true,
    newsProviderApiBaseUrl: 'http://api.ipstack.com',
    newsProviderNewsEndpointPath: '/top-headlines',
    newsProviderSourcesEndpointPath: '/top-headlines/sources',
    newsProviderApiKey: 'fecf4feeffa64e4da682e7d268612ce5',
    logoProviderApiBaseUrl: 'https://logo.clearbit.com',
    ipstackApiKey: '3d6f9e5b2c5d4a1e9f8b7c3d2a6e5f4b', // Sample ipstack API key
};