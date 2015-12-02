export default {
    path: 'profile',
    getComponent(location,cb){
        require.ensure([],(require)=>{
            console.log(cb,location);
            cb(null,require('components/profile'));
        });
    }
}

