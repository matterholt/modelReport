# V2 ticket app SRS-V01.1

1. Introduction

   1. Purpose:

      To track and document the incoming FEA Request. Similar to a bug tracking app with some modification suited for our group.

   2. Intended Audience & intended use

      V2 Engineer and Tech, Will be the main focus for the application. They will be responsible to update the status of the incoming request and documenting the result for the model.

      The Design Engineer, which will have to ablility to submit the FEA request, and to view the status request and finally V2 user judgment for the model.

      Project Lead and Managers will be able to view the current status of the project. .They will have to approve or sign off on the V2 engineer's judgment, before publishing results

   3. Scope

      Better management of incoming FEA Requests. Users will be able to view the workload on the assigned team by viewing the queue of requests. The queue will allow the V2 team to easily view a task that will need to be completed and reduce the time spent on wondering who did what.

      One page that will keep the Team in the loop of what the status of the project. The page will give an overview of what cm is in progress and what stage that the team is working towards. The objective is to get the team on the same pace without wasting time.

      To create an area where results can be analyzed and documented. Having a database of result would allow the team to see the progress that has been made with the model and to keep team from missing opportunities for model progression.

      Sharing results with other groups, and quicker way of creating reports for meetings

   4. Risk Definition and Acronyms

      All data points that are submitted in the FEA request from are not always accurate. Could lead to some discrepancy when evaluating the CM model.

      Difficult to summarize a complex model have had multiple analysis performed for the validation

      FEA request may not have the same analysis applied to it. which may be difficult to summarize at the end of product development

2. Overall Description

   Joining Program

   To access the program, will have to have an email to join the team. (slack like). Not every on will need to have access to project and will need to be restrictive. So manager will have to have control.

   Submitting Request Stage

   A designer will fill out a form that has the details for the model. After submitting, the designer would be able to view a simple (3 stages→ queued, working, published) status of all submitted the request.

   Queued Stage

   The request will live on the queue list until published, and the V2 user has the option to decline a request or accept. Users must provide a reason for the declining request.

   Accepted request stage

   Once the request is ready to be worked on with have an indicator that it is in the meshing/ create stage and will need to update mesh models that are detailed in FEA request. Once completed and checks are performed (Mesh elems check form??)

   Result Validation

   when the model moves to this stage will have the V2 user's judgement applied. Here V2 User will supply the results that are produced when the analysis is completed.

   Approval

   The results are documented and the lead must sign off on the results. Lead will need to see the summary of what the request is, what analysis is performed, and what was the previous values of the model. Lead will be able to add comments to which the V2 User will need to update before publishing the results

   Published

   The result of the FEA request will be open to hole team and can be evaluated as a group.

   1. User Needs → product perspective

      **Primary User: V2 engineer and Tech**

      Able to view the queue of Fea Request that needs to be completed. ( maybe a kanban board like)

      perform some data analysis that would be able to compare different models.

      search and limit model by weight, performance and stage of development.

      Accept incoming Fea request

      Reject Request and provide feedback on why rejected

      Switch status of request to a working stage and assign a name to the model, that is responsible to creating the model.

      Add result data to request and provide a judgement for the request. Status of request would be moved to the next stage.

      Send notification to lead or manager for approval to publish results and send info out to the team.

      **Secondary User: Design Engineer**

      Need to be able to send Fea Request to V2, The form will contain info pertaining to the model wished to validate.

      We will be able to view the status of the model in simple form (queued, processing, completed). in the completed state will have the simple judgment of the model (OK/NG)

      **Secondary User: Lead/Manager:**

      Need to see the status of the project, how many model are pending, completed and the judgement

      Approve the results so engineer can share with the group. could have an option for it to turn off since not all analysis will need to be approve everytime

      Create new projects and assign team that will be working on it.

   2. Assumptions and Dependencies

      Being able to use web technologies may have some complication on getting approved for implementation

      Getting the server space for the program.

3. System Features and Requirements

   1. Functional Requirements

      User should be able to submit request to the queue.

      user can will be able to accept or decline request

      Able to order jobs that have a higher priority,

      View sort by analysis performed on model.

      Notifications of how many jobs are in queue

      Update request with results and judgment

      publish results to share with the group

   2. External interface Requirements

      local web application. (compute manager). When the user creates a login will id themselves as a designer which will only be able to view the status of the request and create/ submit a request.

   3. System Feature

      Browser with access to the internet, Data base

   4. Nonfunctional Requirements

- IDEAS
  - Indicate what type of development
  - Before the analysis stage have an option to perform a element quality report.
  - For the analysis stage, have forms to document each type of analysis perform on the model.
