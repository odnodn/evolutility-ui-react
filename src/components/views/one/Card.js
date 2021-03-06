
// Evolutility-UI-React :: /views/one/Card.js

// Single card (usually part of a set of Cards)

// https://github.com/evoluteur/evolutility-ui-react
// (c) 2020 Olivier Giulieri

import React from 'react'
import PropTypes from 'prop-types';

import Icon from 'react-crud-icons'
import models from '../../../models/all_models'
import { fieldValue } from '../../../utils/format'
import { fieldTypes as ft } from '../../../utils/dico'
import { Link } from 'react-router-dom'

export default class Card extends React.PureComponent {

    viewId = 'card'

    lovMaps = {}

    render() {
        const d = this.props.data || {},
            fields = this.props.fields || [],
            entity = this.props.entity,
            m = models[entity],
            link = '/'+entity+'/'+m.defaultViewOne+'/',
            linkEdit = '/'+entity+'/edit/',
            icon = m.icon ? <img className="evol-many-icon" src={'/pix/'+m.icon} alt=""/> : null,
            getLovMap = this.getLovMap;

        return (
            <div className="panel panel-default"> 
                {fields.map(function(f, idx){
                    const attr = (f.type===ft.lov) ? f.id+'_txt' : f.id,
                        fv = fieldValue(f, d[attr])
                      //  <Link to={link+d.id}><Icon name="browse" size="small"></Icon></Link>

                    if(idx===0){
                        return (
                            <div key={f.id}>
                                <h4><Link  to={link+d.id}>{icon}{fv ? fv : '( '+d.id+' )'}</Link></h4>
                                <div className="card-actions">
                                    <Link to={linkEdit+d.id}><Icon name="edit" size="small"></Icon></Link>
                                </div>
                            </div>
                        )
                       // <i data-id="Delete" title="Delete" className="glyphicon glyphicon-trash"></i>
                    }else if(f.type===ft.image){
                        return <div key={f.id} className="card-fld-center"><Link to={link+d.id}>{fv}</Link></div>
                    }else if(f.type===ft.list){
					    const lovMap = getLovMap(f)
                        return (
                            <div key={f.id}>
                                <label>{f.labelShort || f.label}: </label>
                                <div className="list-tags">
                                    {fv ? fv.map(v => <div key={v}>{lovMap[v] || 'N/A'}</div>) : null}
                                </div>
                            </div>
                        )
                    }else{
                        const icon = f.type===ft.lov && f.lovIcon ? d[f.id+'_icon'] : ''
                        return (
                            <div key={f.id}>
                                <label>{f.labelShort || f.label}: </label>
                                <div>
                                    {icon ? <img src={'/pix/'+icon} className="lov-icon" alt=""/> : ''}
                                    {fv}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

	getLovMap = f => {
		let map = this.lovMaps[f.id]
		if(!map && f.list){
			map = {}
            f.list.forEach(item => map[item.id] = item.text)
            // - it would be better to not duplicate lovMap for fields sharing the same list
			this.lovMaps[f.id] = map
		}
		return map
	}

}

Card.propTypes = {
    entity: PropTypes.string.isRequired,
    fields: PropTypes.array,
    data: PropTypes.object
}