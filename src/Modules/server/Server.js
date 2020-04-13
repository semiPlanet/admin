import { environment } from '../const/environment';
import request from '../server/Request';

export const getDashboard = () => {
    return request({
        url: environment.dashboard,
        method: 'GET'
    }, true);
}

export const getAdmins = () => {
    return request({
        url: environment.admin,
        method:'GET'
    }, true)
}

export const createAdmin = (data) => {
    return request({
        url: environment.admin + environment.create,
        method: 'POST',
        data: data
    }, true)
}

export const deleteAdmin = (id) => {
    return request({
        url: environment.admin + environment.delete + '/' + id,
        method: 'GET'
    }, true);
}

export const createLanguage = (data) => {
    return request({
        url:environment.language,
        method:'POST',
        data: data
    }, true)
}

export const getLanguages = () => {
    return request({
        url:environment.language,
        method:'GET'
    }, true)
}

export const langDelete = (id) => {
    return request({
        url:environment.language + environment.delete + '/' + id,
        method:'GET'
    }, true)
}

export const createProfession = (data) => {
    return request({
        url:environment.profession,
        method:'POST',
        data:data
    }, true)
}

export const getProfessions = () => {
    return request({
        url:environment.profession,
        method:'GET'
    }, true)
}

export const delProfession = (id) => {
    return request({
        url:environment.profession + environment.delete + '/' + id,
        method:"GET",
    }, true)
}
