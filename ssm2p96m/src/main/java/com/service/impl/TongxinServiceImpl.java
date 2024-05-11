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


import com.dao.TongxinDao;
import com.entity.TongxinEntity;
import com.service.TongxinService;
import com.entity.vo.TongxinVO;
import com.entity.view.TongxinView;

@Service("tongxinService")
public class TongxinServiceImpl extends ServiceImpl<TongxinDao, TongxinEntity> implements TongxinService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<TongxinEntity> page = this.selectPage(
                new Query<TongxinEntity>(params).getPage(),
                new EntityWrapper<TongxinEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<TongxinEntity> wrapper) {
		  Page<TongxinView> page =new Query<TongxinView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<TongxinVO> selectListVO(Wrapper<TongxinEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public TongxinVO selectVO(Wrapper<TongxinEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<TongxinView> selectListView(Wrapper<TongxinEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public TongxinView selectView(Wrapper<TongxinEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
