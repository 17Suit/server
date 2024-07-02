CREATE MIGRATION m1foixdfjbcca4vekyyh4z3ikldic2hpojtw7d5nc5oefdszzbhqpq
    ONTO m1o3dz7kervj53dz34asl2mzb6bwitn5prtgozlfqwhhyqjw7sgzoq
{
  ALTER TYPE default::User {
      CREATE PROPERTY name: std::str {
          SET default := '';
      };
  };
};
