export function matchPermission (permissions: string[]|undefined, value: any): boolean {
  if(permissions === undefined) 
    return false;
  const type = typeof value;
  if (type === 'string') {
    return matchPerm(permissions, value);
  }
  return matchPerms(permissions, value);
}

// /**
//  * 字符权限校验
//  * @param {Array} value 校验值
//  * @returns {Boolean}
//  */
export function matchPerms (permissions: string[], value: string[]) {
  if (value && value instanceof Array && value.length > 0) {
    const permissionDatas = value;
    const all_permission = '*:*:*';
    const hasPermission = permissions.some((permission) => {
      return all_permission === permission || permissionDatas.includes(permission);
    });
    if (!hasPermission) {
      return false;
    }
    return true;
  }
  console.error(`need roles! Like checkPermi="['system:user:add','system:user:edit']"`);
  return false;
}

export function matchPerm (permissions: string[], value: string) {
  if (value && value.length > 0) {
    const permissionDatas = value;
    const all_permission = '*:*:*';
    const hasPermission = permissions.some((permission) => {
      return all_permission === permission || permissionDatas === permission;
    });
    if (!hasPermission) {
      return false;
    }
    return true;
  }
  console.error(`need roles! Like checkPermi="['system:user:add','system:user:edit']"`);
  return false;
}

/**
 * 角色权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
export function checkRole (roles: string[], value: string) {
  if (value && value.length > 0) {
    const permissionRoles = value;
    const super_admin = 'admin';
    const hasRole = roles.some((role) => {
      return super_admin === role || permissionRoles.includes(role);
    });
    if (!hasRole) {
      return false;
    }
    return true;
  }
  console.error(`need roles! Like checkRole="['admin','editor']"`);
  return false;
}
