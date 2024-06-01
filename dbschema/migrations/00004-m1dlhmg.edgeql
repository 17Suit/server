CREATE MIGRATION m1dlhmgpjmm4cy627efphryz7k4hf7qjuvzh6kvrxzrzxeawx2gfkq
    ONTO m1iwkumfi5dcewwf5yejqmco2yjaihqywi54zxfdzfnj25gchems6a
{
  ALTER TYPE default::Rol {
      ALTER PROPERTY name {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
