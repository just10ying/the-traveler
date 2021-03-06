/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */

import {
  IPagedQuery
} from '../common';
import {
  IUserInfoCard
} from '../user/interfaces';

export const enum FireteamActivityType {
  All = 0,
  Raid = 1,
  Crucible = 2,
  Trials = 3,
  Nightfall = 4,
  Anything = 5,
  Gambit = 6,
  BlindWell = 7,
  EscalationProtocol = 8,
  Forge = 9
}

export const enum FireteamDateRange {
  All = 0,
  Now = 1,
  TwentyFourHours = 2,
  FortyEightHours = 3,
  ThisWeek = 4
}

export const enum FireteamPlatform {
  Unknown = 0,
  Playstation4 = 1,
  XboxOne = 2,
  Blizzard = 3
}

export const enum FireteamPublicSearchOption {
  PublicAndPrivate = 0,
  PublicOnly = 1,
  PrivateOnly = 2
}

export const enum FireteamSlotSearch {
  NoSlotRestriction = 0,
  HasOpenPlayerSlots = 1,
  HasOpenPlayerOrAltSlots = 2
}

export interface ISearchResultOfFireteamSummary {
  readonly results: IFireteamSummary[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: IPagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}

export interface IFireteamSummary {
  readonly fireteamId: string;
  readonly groupId: string;
  readonly platform: FireteamPlatform;
  readonly activityType: FireteamActivityType;
  readonly isImmediate: boolean;
  readonly scheduledTime?: string;
  readonly ownerMembershipId: string;
  readonly playerSlotCount: number;
  readonly alternateSlotCount?: number;
  readonly availablePlayerSlotCount: number;
  readonly availableAlternateSlotCount: number;
  readonly title: string;
  readonly dateCreated: string;
  readonly dateModified?: string;
  readonly isPublic: boolean;
  readonly locale: string;
  readonly isValid: boolean;
  readonly datePlayerModified: string;
}

export interface ISearchResultOfFireteamResponse {
  readonly results: IFireteamResponse[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: IPagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}

export interface IFireteamResponse {
  readonly Summary: IFireteamSummary;
  readonly Members: IFireteamMember[];
  readonly Alternates: IFireteamMember[];
}

export interface IFireteamMember {
  readonly destinyUserInfo: IUserInfoCard;
  readonly bungieNetUserInfo: IUserInfoCard;
  readonly characterId: string;
  readonly dateJoined: string;
  readonly hasMicrophone: boolean;
  readonly lastPlatformInviteAttemptDate: string;
  readonly lastPlatformInviteAttemptResult: FireteamPlatformInviteResult;
}

export const enum FireteamPlatformInviteResult {
  None = 0,
  Success = 1,
  AlreadyInFireteam = 2,
  Throttled = 3,
  ServiceError = 4
}
