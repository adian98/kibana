/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { CoreSetup, IClusterClient, IRouter, Logger } from '../../../../../src/core/server';
import { Authentication } from '../authentication';
import { Authorization } from '../authorization';
import { ConfigType } from '../config';
import { LegacyAPI } from '../plugin';

import { defineAuthenticationRoutes } from './authentication';
import { defineAuthorizationRoutes } from './authorization';

/**
 * Describes parameters used to define HTTP routes.
 */
export interface RouteDefinitionParams {
  router: IRouter;
  basePath: CoreSetup['http']['basePath'];
  logger: Logger;
  clusterClient: IClusterClient;
  config: ConfigType;
  authc: Authentication;
  authz: Authorization;
  getLegacyAPI: () => Pick<LegacyAPI, 'cspRules'>;
}

export function defineRoutes(params: RouteDefinitionParams) {
  defineAuthenticationRoutes(params);
  defineAuthorizationRoutes(params);
}
