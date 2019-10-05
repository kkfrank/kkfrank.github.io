let BASE_URL ='/'

if($NODE_ENV === 'production'){
    BASE_URL = '/admin-portal/build/'
}

export { BASE_URL }
