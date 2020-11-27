/**
 * Location API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Location from '../model/Location';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteLocation operation.
     * @callback module:api/DefaultApi~deleteLocationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Location>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a location
     * Get an individual location 
     * @param {String} locationName Name of location to delete.
     * @param {module:api/DefaultApi~deleteLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Location>}
     */
    deleteLocation(locationName, callback) {
      let postBody = null;
      // verify the required parameter 'locationName' is set
      if (locationName === undefined || locationName === null) {
        throw new Error("Missing the required parameter 'locationName' when calling deleteLocation");
      }

      let pathParams = {
        'locationName': locationName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Location];
      return this.apiClient.callApi(
        '/location/{locationName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllLocations operation.
     * @callback module:api/DefaultApi~findAllLocationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Location>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all locations
     * Get all locations 
     * @param {module:api/DefaultApi~findAllLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Location>}
     */
    findAllLocations(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Location];
      return this.apiClient.callApi(
        '/locations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findLocation operation.
     * @callback module:api/DefaultApi~findLocationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Location>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find a location
     * Get an individual location 
     * @param {String} locationName Name of location to look for.
     * @param {module:api/DefaultApi~findLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Location>}
     */
    findLocation(locationName, callback) {
      let postBody = null;
      // verify the required parameter 'locationName' is set
      if (locationName === undefined || locationName === null) {
        throw new Error("Missing the required parameter 'locationName' when calling findLocation");
      }

      let pathParams = {
        'locationName': locationName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Location];
      return this.apiClient.callApi(
        '/location/{locationName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the insertLocation operation.
     * @callback module:api/DefaultApi~insertLocationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Location>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a new location
     * Insert a new location
     * @param {String} locationName Name of location to look for.
     * @param {Number} latitude latitude of location to look for.
     * @param {Number} longitude longitude of location to look for.
     * @param {module:api/DefaultApi~insertLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Location>}
     */
    insertLocation(locationName, latitude, longitude, callback) {
      let postBody = null;
      // verify the required parameter 'locationName' is set
      if (locationName === undefined || locationName === null) {
        throw new Error("Missing the required parameter 'locationName' when calling insertLocation");
      }
      // verify the required parameter 'latitude' is set
      if (latitude === undefined || latitude === null) {
        throw new Error("Missing the required parameter 'latitude' when calling insertLocation");
      }
      // verify the required parameter 'longitude' is set
      if (longitude === undefined || longitude === null) {
        throw new Error("Missing the required parameter 'longitude' when calling insertLocation");
      }

      let pathParams = {
        'locationName': locationName
      };
      let queryParams = {
        'latitude': latitude,
        'longitude': longitude
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Location];
      return this.apiClient.callApi(
        '/location/{locationName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocation operation.
     * @callback module:api/DefaultApi~updateLocationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing location
     * Insert a new location
     * @param {String} locationName Name of location to look for.
     * @param {String} description description of location
     * @param {module:api/DefaultApi~updateLocationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateLocation(locationName, description, callback) {
      let postBody = null;
      // verify the required parameter 'locationName' is set
      if (locationName === undefined || locationName === null) {
        throw new Error("Missing the required parameter 'locationName' when calling updateLocation");
      }
      // verify the required parameter 'description' is set
      if (description === undefined || description === null) {
        throw new Error("Missing the required parameter 'description' when calling updateLocation");
      }

      let pathParams = {
        'locationName': locationName
      };
      let queryParams = {
        'description': description
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/location/{locationName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
