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
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve( images.filter(img => !user || user === img.user.name)
                );
            }, 1500);
        })
    }
}
