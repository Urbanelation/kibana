/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { FtrProviderContext } from '../ftr_provider_context';

export function CrossClusterReplicationPageProvider({ getService }: FtrProviderContext) {
  const testSubjects = getService('testSubjects');

  return {
    async appTitleText() {
      return await testSubjects.getVisibleText('appTitle');
    },
    async createFollowerIndexButton() {
      return await testSubjects.find('createFollowerIndexButton');
    },
  };
}
