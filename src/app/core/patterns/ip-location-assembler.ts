import { IpLocation } from '../../ipdata/model/ip-location/ip-location.model';
import { IpLocationResource } from './ip-location-resource';

export class IpLocationAssembler {
    static fromResource(resource: IpLocationResource): IpLocation {
        return {
            ip: resource.ip || '',
            continent_name: resource.continent_name || '',
            country_name: resource.country_name || '',
            region_name: resource.region_name || '',
            city: resource.city || '',
            latitude: resource.latitude || 0,
            longitude: resource.longitude || 0,
            country_flag: resource.country_code ? `https://flagcdn.com/w320/${resource.country_code.toLowerCase()}.png` : ''
        };
    }
}
