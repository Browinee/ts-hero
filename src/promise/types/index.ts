type ResolveType = (reslove: any) => any;
type RejectType = (reslove: any) => any;
type Executor = (resolve: ResolveType, reject: RejectType) => any;
export {ResolveType, RejectType, Executor}