// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface DB {
    Lists: Lists;
}

export interface Lists {
    d: D;
}

export interface D {
    results: Result[];
}

export interface Result {
    GetList(): unknown;
    __metadata:                                    ResultMetadata;
    FirstUniqueAncestorSecurableObject:            TartuGecko;
    RoleAssignments:                               TartuGecko;
    Author:                                        TartuGecko;
    ContentTypes:                                  TartuGecko;
    CreatablesInfo:                                TartuGecko;
    DefaultView:                                   TartuGecko;
    DescriptionResource:                           TartuGecko;
    EventReceivers:                                TartuGecko;
    Fields:                                        TartuGecko;
    Forms:                                         TartuGecko;
    InformationRightsManagementSettings:           TartuGecko;
    Items:                                         TartuGecko;
    ParentWeb:                                     TartuGecko;
    RootFolder:                                    TartuGecko;
    Subscriptions:                                 TartuGecko;
    TitleResource:                                 TartuGecko;
    UserCustomActions:                             TartuGecko;
    VersionPolicies:                               TartuGecko;
    Views:                                         TartuGecko;
    WorkflowAssociations:                          TartuGecko;
    AllowContentTypes:                             boolean;
    BaseTemplate:                                  number;
    BaseType:                                      number;
    ContentTypesEnabled:                           boolean;
    CrawlNonDefaultViews:                          boolean;
    Created:                                       string;
    CurrentChangeToken:                            CurrentChangeToken;
    DefaultContentApprovalWorkflowId:              string;
    DefaultItemOpenUseListSetting:                 boolean;
    Description:                                   string;
    Direction:                                     Direction;
    DisableCommenting:                             boolean;
    DisableGridEditing:                            boolean;
    DocumentTemplateUrl:                           null | string;
    DraftVersionVisibility:                        number;
    EnableAttachments:                             boolean;
    EnableFolderCreation:                          boolean;
    EnableMinorVersions:                           boolean;
    EnableModeration:                              boolean;
    EnableRequestSignOff:                          boolean;
    EnableVersioning:                              boolean;
    EntityTypeName:                                string;
    ExemptFromBlockDownloadOfNonViewableFiles:     boolean;
    FileSavePostProcessingEnabled:                 boolean;
    ForceCheckout:                                 boolean;
    HasExternalDataSource:                         boolean;
    Hidden:                                        boolean;
    Id:                                            string;
    ImagePath:                                     Path;
    ImageUrl:                                      string;
    DefaultSensitivityLabelForLibrary:             string;
    SensitivityLabelToEncryptOnDOwnloadForLibrary: null;
    IrmEnabled:                                    boolean;
    IrmExpire:                                     boolean;
    IrmReject:                                     boolean;
    IsApplicationList:                             boolean;
    IsCatalog:                                     boolean;
    IsPrivate:                                     boolean;
    ItemCount:                                     number;
    LastItemDeletedDate:                           string;
    LastItemModifiedDate:                          string;
    LastItemUserModifiedDate:                      string;
    ListExperienceOptions:                         number;
    ListItemEntityTypeFullName:                    string;
    MajorVersionLimit:                             number;
    MajorWithMinorVersionsLimit:                   number;
    MultipleDataList:                              boolean;
    NoCrawl:                                       boolean;
    ParentWebPath:                                 Path;
    ParentWebUrl:                                  ParentWebURL;
    ParserDisabled:                                boolean;
    ServerTemplateCanCreateFolders:                boolean;
    TemplateFeatureId:                             string;
    Title:                                         string;
}

export interface TartuGecko {
    __deferred: Deferred;
}

export interface Deferred {
    uri: string;
}

export interface CurrentChangeToken {
    __metadata:  CurrentChangeTokenMetadata;
    StringValue: string;
}

export interface CurrentChangeTokenMetadata {
    type: PurpleType;
}

export enum PurpleType {
    SPChangeToken = "SP.ChangeToken",
    SPResourcePath = "SP.ResourcePath",
}

export enum Direction {
    None = "none",
}

export interface Path {
    __metadata: CurrentChangeTokenMetadata;
    DecodedUrl: string;
}

export enum ParentWebURL {
    Empty = "/",
}

export interface ResultMetadata {
    id:   string;
    uri:  string;
    etag: string;
    type: FluffyType;
}

export enum FluffyType {
    SPList = "SP.List",
}