// GENERATED by @edgedb/generate v0.5.3

import * as $ from "../reflection";
import * as _ from "../imports";
import type * as _std from "./std";
export type $ActivityλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "endTime": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "startTime": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "<activities[is Plan]": $.LinkDesc<$Plan, $.Cardinality.Many, {}, false, false,  false, false>;
  "<activities": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Activity = $.ObjectType<"default::Activity", $ActivityλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Activity = $.makeType<$Activity>(_.spec, "8d04467e-1d53-11ef-8a42-a7be956467d7", _.syntax.literal);

const Activity: $.$expr_PathNode<$.TypeSet<$Activity, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Activity, $.Cardinality.Many), null);

export type $BudgetλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "amount": $.PropertyDesc<_std.$float32, $.Cardinality.One, false, false, false, false>;
  "max": $.PropertyDesc<_std.$float32, $.Cardinality.One, false, false, false, false>;
  "min": $.PropertyDesc<_std.$float32, $.Cardinality.One, false, false, false, false>;
  "currency": $.LinkDesc<$Currency, $.Cardinality.One, {}, false, false,  false, false>;
  "<budget[is Plan]": $.LinkDesc<$Plan, $.Cardinality.Many, {}, false, false,  false, false>;
  "<budget": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Budget = $.ObjectType<"default::Budget", $BudgetλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Budget = $.makeType<$Budget>(_.spec, "8d07f95f-1d53-11ef-a11d-b73a22b308e3", _.syntax.literal);

const Budget: $.$expr_PathNode<$.TypeSet<$Budget, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Budget, $.Cardinality.Many), null);

export type $CityλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, false>;
  "latitude": $.PropertyDesc<_std.$float32, $.Cardinality.One, false, false, false, false>;
  "longitude": $.PropertyDesc<_std.$float32, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "country": $.LinkDesc<$Country, $.Cardinality.One, {}, false, false,  false, false>;
  "state": $.LinkDesc<$State, $.Cardinality.One, {}, false, false,  false, false>;
  "<city[is Destination]": $.LinkDesc<$Destination, $.Cardinality.Many, {}, false, false,  false, false>;
  "<city": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $City = $.ObjectType<"default::City", $CityλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $City = $.makeType<$City>(_.spec, "8d0f4ccc-1d53-11ef-b180-c1e42d02a1ed", _.syntax.literal);

const City: $.$expr_PathNode<$.TypeSet<$City, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($City, $.Cardinality.Many), null);

export type $ContinentλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<continent[is Country]": $.LinkDesc<$Country, $.Cardinality.Many, {}, false, false,  false, false>;
  "<continent": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Continent = $.ObjectType<"default::Continent", $ContinentλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Continent = $.makeType<$Continent>(_.spec, "8d0a0fc3-1d53-11ef-8cc2-cdb145e9816e", _.syntax.literal);

const Continent: $.$expr_PathNode<$.TypeSet<$Continent, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Continent, $.Cardinality.Many), null);

export type $CountryλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "code": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "continent": $.LinkDesc<$Continent, $.Cardinality.One, {}, false, false,  false, false>;
  "<country[is State]": $.LinkDesc<$State, $.Cardinality.Many, {}, false, false,  false, false>;
  "<country[is City]": $.LinkDesc<$City, $.Cardinality.Many, {}, false, false,  false, false>;
  "<country[is Destination]": $.LinkDesc<$Destination, $.Cardinality.Many, {}, false, false,  false, false>;
  "<country": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Country = $.ObjectType<"default::Country", $CountryλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Country = $.makeType<$Country>(_.spec, "8d0b9a65-1d53-11ef-b107-4d2d249e1948", _.syntax.literal);

const Country: $.$expr_PathNode<$.TypeSet<$Country, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Country, $.Cardinality.Many), null);

export type $CurrencyλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "symbol": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<currency[is Budget]": $.LinkDesc<$Budget, $.Cardinality.Many, {}, false, false,  false, false>;
  "<currency": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Currency = $.ObjectType<"default::Currency", $CurrencyλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Currency = $.makeType<$Currency>(_.spec, "8d0675ea-1d53-11ef-8bda-7b3a90a64d70", _.syntax.literal);

const Currency: $.$expr_PathNode<$.TypeSet<$Currency, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Currency, $.Cardinality.Many), null);

export type $DestinationλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "address": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "latitude": $.PropertyDesc<_std.$float32, $.Cardinality.One, false, false, false, false>;
  "longitude": $.PropertyDesc<_std.$float32, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "city": $.LinkDesc<$City, $.Cardinality.One, {}, false, false,  false, false>;
  "country": $.LinkDesc<$Country, $.Cardinality.One, {}, false, false,  false, false>;
  "state": $.LinkDesc<$State, $.Cardinality.One, {}, false, false,  false, false>;
  "<destination[is Plan]": $.LinkDesc<$Plan, $.Cardinality.Many, {}, false, false,  false, false>;
  "<destination": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Destination = $.ObjectType<"default::Destination", $DestinationλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Destination = $.makeType<$Destination>(_.spec, "8d1180b2-1d53-11ef-9278-eb88a621fa88", _.syntax.literal);

const Destination: $.$expr_PathNode<$.TypeSet<$Destination, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Destination, $.Cardinality.Many), null);

export type $PermissionsλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "create": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "delete": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "read": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "update": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "write": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "<permissions[is Rol]": $.LinkDesc<$Rol, $.Cardinality.Many, {}, false, false,  false, false>;
  "<permissions": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Permissions = $.ObjectType<"default::Permissions", $PermissionsλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Permissions = $.makeType<$Permissions>(_.spec, "8d1985bb-1d53-11ef-a65a-dbffb36f9345", _.syntax.literal);

const Permissions: $.$expr_PathNode<$.TypeSet<$Permissions, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Permissions, $.Cardinality.Many), null);

export type $PlanλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "endDate": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "startDate": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "activities": $.LinkDesc<$Activity, $.Cardinality.Many, {}, false, false,  false, false>;
  "budget": $.LinkDesc<$Budget, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "destination": $.LinkDesc<$Destination, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "status": $.LinkDesc<$Status, $.Cardinality.One, {}, false, false,  false, false>;
  "members": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "owner": $.LinkDesc<$User, $.Cardinality.One, {}, false, false,  false, false>;
  "<plans[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<plans": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Plan = $.ObjectType<"default::Plan", $PlanλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Plan = $.makeType<$Plan>(_.spec, "8d167723-1d53-11ef-8ced-e905a08ba984", _.syntax.literal);

const Plan: $.$expr_PathNode<$.TypeSet<$Plan, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Plan, $.Cardinality.Many), null);

export type $RolλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "permissions": $.LinkDesc<$Permissions, $.Cardinality.One, {}, false, false,  false, false>;
  "<rol[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<rol": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Rol = $.ObjectType<"default::Rol", $RolλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
  {name: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Rol = $.makeType<$Rol>(_.spec, "8d1b5979-1d53-11ef-8eec-f18b9ed37e21", _.syntax.literal);

const Rol: $.$expr_PathNode<$.TypeSet<$Rol, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Rol, $.Cardinality.Many), null);

export type $StateλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "code": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "country": $.LinkDesc<$Country, $.Cardinality.One, {}, false, false,  false, false>;
  "<state[is City]": $.LinkDesc<$City, $.Cardinality.Many, {}, false, false,  false, false>;
  "<state[is Destination]": $.LinkDesc<$Destination, $.Cardinality.Many, {}, false, false,  false, false>;
  "<state": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $State = $.ObjectType<"default::State", $StateλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $State = $.makeType<$State>(_.spec, "8d0d728e-1d53-11ef-a4c5-a9fe45f7f7ad", _.syntax.literal);

const State: $.$expr_PathNode<$.TypeSet<$State, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($State, $.Cardinality.Many), null);

export type $StatusλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<status[is Plan]": $.LinkDesc<$Plan, $.Cardinality.Many, {}, false, false,  false, false>;
  "<status": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Status = $.ObjectType<"default::Status", $StatusλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Status = $.makeType<$Status>(_.spec, "8d14e6e9-1d53-11ef-8b69-8bfbb53bc9fe", _.syntax.literal);

const Status: $.$expr_PathNode<$.TypeSet<$Status, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Status, $.Cardinality.Many), null);

export type $UserλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "birthday": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "password": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "username": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "plans": $.LinkDesc<$Plan, $.Cardinality.Many, {}, false, false,  false, false>;
  "rol": $.LinkDesc<$Rol, $.Cardinality.One, {}, false, false,  false, false>;
  "<members[is Plan]": $.LinkDesc<$Plan, $.Cardinality.Many, {}, false, false,  false, false>;
  "<owner[is Plan]": $.LinkDesc<$Plan, $.Cardinality.Many, {}, false, false,  false, false>;
  "<members": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<owner": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
  {username: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $User = $.makeType<$User>(_.spec, "8d1d488a-1d53-11ef-8f22-ddd33923b706", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null);



export { $Activity, Activity, $Budget, Budget, $City, City, $Continent, Continent, $Country, Country, $Currency, Currency, $Destination, Destination, $Permissions, Permissions, $Plan, Plan, $Rol, Rol, $State, State, $Status, Status, $User, User };

type __defaultExports = {
  "Activity": typeof Activity;
  "Budget": typeof Budget;
  "City": typeof City;
  "Continent": typeof Continent;
  "Country": typeof Country;
  "Currency": typeof Currency;
  "Destination": typeof Destination;
  "Permissions": typeof Permissions;
  "Plan": typeof Plan;
  "Rol": typeof Rol;
  "State": typeof State;
  "Status": typeof Status;
  "User": typeof User
};
const __defaultExports: __defaultExports = {
  "Activity": Activity,
  "Budget": Budget,
  "City": City,
  "Continent": Continent,
  "Country": Country,
  "Currency": Currency,
  "Destination": Destination,
  "Permissions": Permissions,
  "Plan": Plan,
  "Rol": Rol,
  "State": State,
  "Status": Status,
  "User": User
};
export default __defaultExports;
