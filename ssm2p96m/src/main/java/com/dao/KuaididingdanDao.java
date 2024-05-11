package com.dao;

import com.entity.KuaididingdanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.KuaididingdanVO;
import com.entity.view.KuaididingdanView;


/**
 * 快递订单
 * 
 * @author 
 * @email 
 * @date 2021-04-06 18:09:59
 */
public interface KuaididingdanDao extends BaseMapper<KuaididingdanEntity> {
	
	List<KuaididingdanVO> selectListVO(@Param("ew") Wrapper<KuaididingdanEntity> wrapper);
	
	KuaididingdanVO selectVO(@Param("ew") Wrapper<KuaididingdanEntity> wrapper);
	
	List<KuaididingdanView> selectListView(@Param("ew") Wrapper<KuaididingdanEntity> wrapper);

	List<KuaididingdanView> selectListView(Pagination page,@Param("ew") Wrapper<KuaididingdanEntity> wrapper);
	
	KuaididingdanView selectView(@Param("ew") Wrapper<KuaididingdanEntity> wrapper);
	
}
