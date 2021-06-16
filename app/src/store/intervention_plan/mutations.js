/*
export function someMutation (state) {
}
*/

export function setInterventionPlan(state, intervention_plan) {
  state.intervention_plan = intervention_plan
}

export function editInterventionPlan(state, intervention_plan) {
  console.log("update the state")
  const index = state.intervention_plan.findIndex(item => item.id === intervention_plan.id);
  if (index !== -1) state.intervention_plan.splice(index, 1, intervention_plan);
}

export function saveInterventionPlan(state, intervention_plan) {
  console.log("save to the state")
  console.log(intervention_plan)

  state.intervention_plan.push(intervention_plan);
  console.log(state.intervention_plan)
}

export function deleteInterventionPlan(state, index){
  const idx = state.intervention_plan.findIndex(item => item.id === index);
  if (idx !== -1) state.intervention_plan.splice(idx, 1);
}

export function editIntervention(state, payload) {
  console.log("update the state")
  var the_plan = state.intervention_plan.filter((plan)=>{
    return plan.id == payload.plan_id
  })[0]
  var the_intervention = the_plan.interventions.filter((int)=>{
    return int.id == payload.intervention_id
  })[0]
  the_intervention.validationRequestDate = payload.date
  //const index = state.intervention_plan.findIndex(item => item.id === payload.plan_id);
  //if (index !== -1) state.intervention_plan.splice(index, 1, intervention_plan);
}
/*export function delete_document_type (state, document_typeId) {
  let document_types = state.document_type.filter(d => d.id != document_typeId)
  state.document_type = document_types
}*/
