CREATE MIGRATION m1o3dz7kervj53dz34asl2mzb6bwitn5prtgozlfqwhhyqjw7sgzoq
    ONTO m1zcuny5hvm3gnji4uovzhpv6ezdps6lwov5ucykouud2zverzhm6a
{
  ALTER TYPE default::User {
      DROP LINK groups;
  };
};
