import { App } from '@expoamplify/app';
import { Amplify } from 'aws-amplify';
import awsConfig from '@expoamplify/aws-amplify/src/amplifyconfiguration.json';

Amplify.configure(awsConfig);

export default () => {
    return (
        <App />
    );
};
