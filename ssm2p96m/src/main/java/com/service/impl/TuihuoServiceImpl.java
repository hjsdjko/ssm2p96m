package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.TuihuoDao;
import com.entity.TuihuoEntity;
import com.service.TuihuoService;
import com.entity.vo.TuihuoVO;
import com.entity.view.TuihuoView;

@Service("tuihuoService")
public class TuihuoServiceImpl extends ServiceImpl<TuihuoDao, TuihuoEntity> implements TuihuoService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<TuihuoEntity> page = this.selectPage(
                new Query<TuihuoEntity>(params).getPage(),
                new EntityWrapper<TuihuoEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<TuihuoEntity> wrapper) {
		  Page<TuihuoView> page =new Query<TuihuoView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<TuihuoVO> selectListVO(Wrapper<TuihuoEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public TuihuoVO selectVO(Wrapper<TuihuoEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<TuihuoView> selectListView(Wrapper<TuihuoEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public TuihuoView selectView(Wrapper<TuihuoEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
