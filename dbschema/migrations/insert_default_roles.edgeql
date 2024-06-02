WITH
  admin_permissions := (
    INSERT Permissions {
      read := true,
      write := true,
      `create` := true,
      `update` := true,
      `delete` := true
    }
  ),
  user_permissions := (
    INSERT Permissions {
      read := true,
      write := false,
      `create` := false,
      `update` := false,
      `delete` := false
    }
  ),
  other_permissions := (
    INSERT Permissions {
      read := true,
      write := true,
      `create` := true,
      `update` := false,
      `delete` := false
    }
  )
INSERT Rol {
  name := 'admin',
  description := 'Administrator role with full permissions',
  permissions := admin_permissions
};

INSERT Rol {
  name := 'user',
  description := 'User role with limited permissions',
  permissions := user_permissions
};

INSERT Rol {
  name := 'other',
  description := 'Other role with custom permissions',
  permissions := other_permissions
};
