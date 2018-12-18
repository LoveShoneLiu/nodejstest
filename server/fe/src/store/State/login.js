import { getCookie } from 'jspath/common/utils';

export default {
    isLogin: getCookie('userName') !== '' ? true : false
}