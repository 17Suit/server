CREATE MIGRATION m1aude2zeibgfveq6ixv2gtunlpah7zpeies5thjmflxzfbqstwk5a
    ONTO m1irsgs42iviydkpgwbggljwvcxy5cdlcsjhfpzbefuu5b7cshihuq
{
  ALTER TYPE default::User {
      ALTER PROPERTY password {
          RESET OPTIONALITY;
      };
  };
};
