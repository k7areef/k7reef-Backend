import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectProjectScreen extends Struct.ComponentSchema {
  collectionName: 'components_project_project_screens';
  info: {
    displayName: 'Project Screen';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2000;
        minLength: 10;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 2;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.project-screen': ProjectProjectScreen;
    }
  }
}
