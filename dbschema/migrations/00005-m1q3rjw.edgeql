CREATE MIGRATION m1q3rjwp6crmmuh2bjtjezrzzaccndpg5hctdyzqksrz37gmvor6oq
    ONTO m1dlhmgpjmm4cy627efphryz7k4hf7qjuvzh6kvrxzrzxeawx2gfkq
{
  ALTER TYPE default::User {
      ALTER PROPERTY username {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
