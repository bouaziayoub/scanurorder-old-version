export function setCookie(cname, cvalue) {
    document.cookie = `${cname} = ${cvalue} ;;path=/`;
}

export function getCookie(cname) {
    const name = cname;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length + 1, c.length);
        }
    }
    return '';
}

export function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
