import { CameraRoll, PermissionsAndroid } from 'react-native';

export default {
    addImage: function(image) {
        console.log('API image ', image);
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve( image.uri );
            }, 3000)
        })
    },
    fetchImages: function(user = null){
        const userPhotos = [];
        const images = [

            {id: 1, src: 'https://www.scouting.org/wp-content/uploads/2018/07/7593_Wolf_132_MR_261.jpg', user: {pic: 'https://mticenter.com/mtopm/wp-content/uploads/2017/05/happy-face.png', name: 'Naia'}},
            {id: 2, src: 'https://www.scouting.org/wp-content/uploads/2018/07/7593_Wolf_132_MR_261.jpg', user: {pic: 'https://mticenter.com/mtopm/wp-content/uploads/2017/05/happy-face.png',
                    name: 'Mike_1982'}},
            {id: 5, src: 'https://www.scouting.org/wp-content/uploads/2018/07/7593_Wolf_132_MR_261.jpg', user: {pic: 'https://mticenter.com/mtopm/wp-content/uploads/2017/05/happy-face.png',
                    name: 'Sharer1'}},
            {id: 3, src: 'https://www.scouting.org/wp-content/uploads/2018/07/7593_Wolf_132_MR_261.jpg', user: {pic: 'https://mticenter.com/mtopm/wp-content/uploads/2017/05/happy-face.png', name: 'Naia'}},
            {id: 6, src: 'https://www.scouting.org/wp-content/uploads/2018/07/7593_Wolf_132_MR_261.jpg', user: {pic: 'https://mticenter.com/mtopm/wp-content/uploads/2017/05/happy-face.png',
                    name: 'Sharer1'}},
            {id: 4, src: 'https://www.scouting.org/wp-content/uploads/2018/07/7593_Wolf_132_MR_261.jpg', user: {pic: 'https://mticenter.com/mtopm/wp-content/uploads/2017/05/happy-face.png',
                    name: 'Sharer1'}},
            {id: 7, src: 'https://www.scouting.org/wp-content/uploads/2018/07/7593_Wolf_132_MR_261.jpg', user: {pic: 'https://mticenter.com/mtopm/wp-content/uploads/2017/05/happy-face.png',
                    name: 'Sharer1'}}

        ];
        return PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                'title': 'Cool Photo App Camera Permission',
                'message': 'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.'
            }
        ).then(granted => {
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return CameraRoll.getPhotos({ first: 20, assetType: 'Photos', groupName: 'Camera' })
                    .then(cameraRollData => {
                        console.log('camera roll ', cameraRollData);
                        cameraRollData.edges.forEach((edge) => {
                            userPhotos.push({
                                id: edge.node.timestamp,
                                src: edge.node.image.uri,
                                user: {
                                    name: user,
                                    pic: 'https://mticenter.com/mtopm/wp-content/uploads/2017/05/happy-face.png'
                                }
                            });
                        });
                        if (user) {
                            return new Promise((resolve, reject) => {
                                setTimeout(()=>{
                                    resolve( [...userPhotos, ...images]);
                                }, 1500);
                            })
                        }
                        return new Promise((resolve, reject) => {
                            setTimeout(()=>{
                                resolve(userPhotos);
                            }, 1500);
                        })
                    })
                    .catch(error => { console.log('camera roll error ', error); });
            }
        });
    }
}
