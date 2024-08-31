import type { Schema, Attribute } from '@strapi/strapi';

export interface TagsTags extends Schema.Component {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'Tags';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tags.tags': TagsTags;
    }
  }
}
