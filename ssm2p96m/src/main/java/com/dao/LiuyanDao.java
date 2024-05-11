package com.dao;

import com.entity.LiuyanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.LiuyanVO;
import com.entity.view.LiuyanView;


/**
 * 留言
 * 
 * @author 
 * @email 
 * @date 2021-04-06 18:09:59
 */
public interface LiuyanDao extends BaseMapper<LiuyanEntity> {
	
	List<LiuyanVO> selectListVO(@Param("ew") Wrapper<LiuyanEntity> wrapper);
	
	LiuyanVO selectVO(@Param("ew") Wrapper<LiuyanEntity> wrapper);
	
	List<LiuyanView> selectListView(@Param("ew") Wrapper<LiuyanEntity> wrapper);

	List<LiuyanView> selectListView(Pagination page,@Param("ew") Wrapper<LiuyanEntity> wrapper);
	
	LiuyanView selectView(@Param("ew") Wrapper<LiuyanEntity> wrapper);
	
}
