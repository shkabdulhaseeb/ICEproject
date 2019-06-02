/**
 * Soccer API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: voetbalsvk@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import {AccountDTO} from './accountDTO';
import {AddressDTO} from './addressDTO';
import {ImageDTO} from './imageDTO';


export interface ProfileDTO {
    account?: AccountDTO;
    address?: AddressDTO;
    description?: string;
    doodleNotifications?: boolean;
    id?: number;
    image?: ImageDTO;
    mobilePhone?: string;
    newsNotifications?: boolean;
    phone?: string;
    position?: ProfileDTO.PositionEnum;
}
export namespace ProfileDTO {
    export type PositionEnum = 'GOALKEEPER' | 'DEFENDER' | 'MIDFIELDER' | 'FORWARD';
    export const PositionEnum = {
        GOALKEEPER: 'GOALKEEPER' as PositionEnum,
        DEFENDER: 'DEFENDER' as PositionEnum,
        MIDFIELDER: 'MIDFIELDER' as PositionEnum,
        FORWARD: 'FORWARD' as PositionEnum
    }
}