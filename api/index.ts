const URL_API = "/api";

const responsed = async (resp: any, status: number) => {
  return {
    resp: resp,
    status: status
  }
}

export const api = {
  async uploadImages(material: any) {
    try {
      const { images } = material;

      const formdata = new FormData();

      for (const file of images) {
        formdata.append('images', file, file.name)
      }

      const request = new Request(`${URL_API}/image-rendering`, {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      })

      return await fetch(request)
        .then(async resp => {
          return responsed(await resp.json(), resp.status);
        }).catch(error => console.log('error', error));

    } catch (error) {
      console.error('uploadImages: ', error)
    }
  }
}