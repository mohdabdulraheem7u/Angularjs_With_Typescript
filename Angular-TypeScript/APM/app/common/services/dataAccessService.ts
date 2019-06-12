module app.common {
  interface IDataAccessService {}
  interface IProductResources extends ng.resource.IResource<app.domain.Product>{}
}
