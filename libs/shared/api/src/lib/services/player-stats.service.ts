import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatPlayerDto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PlayerStatsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getPlayersBySeasonByType(
    season: string,
    seasonType: string
  ): Observable<StatPlayerDto[]> {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/season/current`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPlayersBySeasonByTypeByForwards(
    season: string,
    seasonType: string
  ): Observable<StatPlayerDto[]> {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/season/forwards`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPlayersBySeasonByDefense(
    season: string,
    seasonType: string
  ): Observable<StatPlayerDto[]> {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/season/defense`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPlayersBySeasonByTypeByTeam(
    id: number,
    season: string,
    seasonType: string
  ): Observable<StatPlayerDto[]> {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/current/team/${id}`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPlayersByUserByType(
    id: number,
    seasonType: string
  ): Observable<StatPlayerDto[]> {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/history/user/${id}`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPlayersByUserByShowByType(
    id: number,
    seasonType: string
  ): Observable<StatPlayerDto[]> {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/show/history/user/${id}`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPlayersStatsByType(seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/type/season`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPlayerStatsByTypeSummed(seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/type/all-time`, options)
      .pipe(map((result: any) => result['result']));
  }

  getForwardStatsByType(seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/type/season/forward`, options)
      .pipe(map((result: any) => result['result']));
  }

  getForwardStatsByTypeSummed(seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/type/all-time/forward`, options)
      .pipe(map((result: any) => result['result']));
  }

  getDefenseStatsByType(seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/type/season/defense`, options)
      .pipe(map((result: any) => result['result']));
  }

  getDefenseStatsByTypeSummed(seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/type/all-time/defense`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPlayerStatsById(id: number) {
    return this._http
      .get(`${this.apiUrl}/v2/players-stats/player/${id}`)
      .pipe(map((result: any) => result['result']));
  }

  // ==================================== LEADERS ==========================================

  getAllPlayerLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/all-leaders`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPointLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/points`, options)
      .pipe(map((result: any) => result['result']));
  }

  getRookieLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/rookies`, options)
      .pipe(map((result: any) => result['result']));
  }

  getDefenseLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/defense`, options)
      .pipe(map((result: any) => result['result']));
  }

  getGoalLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/goals`, options)
      .pipe(map((result: any) => result['result']));
  }

  getAssistLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/assists`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPpGoalsLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/ppgoals`, options)
      .pipe(map((result: any) => result['result']));
  }

  getShGoalsLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/shgoals`, options)
      .pipe(map((result: any) => result['result']));
  }

  getShotsLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/shots`, options)
      .pipe(map((result: any) => result['result']));
  }

  getBlockedShotsLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/blocked`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPenaltyLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/penalties`, options)
      .pipe(map((result: any) => result['result']));
  }

  getMinutesLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/minutes`, options)
      .pipe(map((result: any) => result['result']));
  }

  getPlusMinusLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/plus`, options)
      .pipe(map((result: any) => result['result']));
  }

  getWorstPlusMinusLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/minus`, options)
      .pipe(map((result: any) => result['result']));
  }

  getHitsLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/hits`, options)
      .pipe(map((result: any) => result['result']));
  }

  getStreakLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/current`, options)
      .pipe(map((result: any) => result['result']));
  }

  getLongStreakLeaders(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/players-stats/leaders/long`, options)
      .pipe(map((result: any) => result['result']));
  }
}
