import fetch from '@/api/fetch';

/**
 * 群名模糊搜索用户
 * @param string
 */
export function getGroupsByName(groupName: string) {
  // return fetch.get(`/group/findByName?groupName=${groupName}`);
  console.log("----getGroupsByName-----", groupName);
  return fetch.get(`http://localhost:8080/chatrooms/ByRoomName/${groupName}`);
}

/**
 * 群分页消息
 * @param params
 */
export async function getGroupMessages(groupId: string) {
  console.log("----getGroupMessages-----", groupId);
  return await fetch.get(`http://localhost:8080/groupMessage/ByRoomId/${groupId}`);
}
