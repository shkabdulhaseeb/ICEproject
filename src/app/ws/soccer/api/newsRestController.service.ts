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
/* tslint:disable:no-unused-variable member-ordering */

import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {CustomHttpUrlEncodingCodec} from '../encoder';

import {Observable} from 'rxjs/Observable';
import {NewsDTO} from '../model/newsDTO';
import {PageDTONewsDTO} from '../model/pageDTONewsDTO';
import {ResponseEntity} from '../model/responseEntity';

import {BASE_PATH} from '../variables';
import {Configuration} from '../configuration';


@Injectable()
export class NewsRestControllerService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Delete news
     *
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteNews(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;
    public deleteNews(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public deleteNews(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;
    public deleteNews(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteNews.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<ResponseEntity>(`${this.basePath}/api/v1/news/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get news
     *
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getNews(id: number, observe?: 'body', reportProgress?: boolean): Observable<NewsDTO>;
    public getNews(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewsDTO>>;
    public getNews(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewsDTO>>;
    public getNews(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getNews.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<NewsDTO>(`${this.basePath}/api/v1/news/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get news
     *
     * @param page page
     * @param searchTerm searchTerm
     * @param size size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getNewsPage(page: number, searchTerm?: string, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PageDTONewsDTO>;
    public getNewsPage(page: number, searchTerm?: string, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageDTONewsDTO>>;
    public getNewsPage(page: number, searchTerm?: string, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageDTONewsDTO>>;
    public getNewsPage(page: number, searchTerm?: string, size?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getNewsPage.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (searchTerm !== undefined) {
            queryParameters = queryParameters.set('searchTerm', <any>searchTerm);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters = queryParameters.set('size', <any>size);
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<PageDTONewsDTO>(`${this.basePath}/api/v1/news`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Post news
     *
     * @param newsDTO newsDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postNews(newsDTO: NewsDTO, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;
    public postNews(newsDTO: NewsDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public postNews(newsDTO: NewsDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;
    public postNews(newsDTO: NewsDTO, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (newsDTO === null || newsDTO === undefined) {
            throw new Error('Required parameter newsDTO was null or undefined when calling postNews.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<ResponseEntity>(`${this.basePath}/api/v1/news`,
            newsDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update news
     *
     * @param newsDTO newsDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateNews(newsDTO: NewsDTO, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;
    public updateNews(newsDTO: NewsDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public updateNews(newsDTO: NewsDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;
    public updateNews(newsDTO: NewsDTO, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (newsDTO === null || newsDTO === undefined) {
            throw new Error('Required parameter newsDTO was null or undefined when calling updateNews.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<ResponseEntity>(`${this.basePath}/api/v1/news`,
            newsDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
