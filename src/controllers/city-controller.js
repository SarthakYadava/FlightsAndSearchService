 const {CityService}= require('../services/index'); 

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: 'Successfully created a city',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create a city',
      err: error
    });
  }
}

 const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully deleted a city',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to delete the city',
      err: error
    });
  }
}
 
const update = async (req,res)=>{
            try{
                const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
        data: response,
        success: true,
        message: 'Successfully updated a city',
        err: {}
        });

    }
    catch (error) {
    console.log(error);
        return res.status(500).json({
        data: {},
        success: false,
        message: 'Not able to delete the city',
        err: error
    });
  }
}

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: 'Successfully fetched a city',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch the city',
      err: error
    });
  }
}


const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: 'Successfully fetched all cities',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch the cities',
      err: error
    });
  }
}

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll
};




