const LOCAL_ADDRESS = 'http://localhost:8080';//개발용
const DEPLOY_ADDRESS = '43.203.57.88';  //배포용

export default function getServerAddress () {
    return LOCAL_ADDRESS;
}